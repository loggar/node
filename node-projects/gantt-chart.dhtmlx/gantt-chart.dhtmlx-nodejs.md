# dhtmlxGantt with Node.js

## Step 1. Creating a project

```
mkdir dhx-gantt-app
cd dhx-gantt-app

npm init -y
```

`package.json`

```json
{
  "name": "dhx-gantt-app",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "dependencies": {
    "body-parser": "^1.15.0",
    "express": "^4.13.4"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}
```

```
npm install
```

`server.js`

```js
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = 1337;
var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log("Server is running on port " + port + "...");
});
```

## Step 2. Adding Gantt to the page

`public/index.html`

```html
<!DOCTYPE html>
<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />

  <script src="https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.js"></script>
  <link
    href="https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.css"
    rel="stylesheet"
  />

  <style type="text/css">
    html,
    body {
      height: 100%;
      padding: 0px;
      margin: 0px;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div id="gantt_here" style="width:100%; height:100%;"></div>
  <script type="text/javascript">
    gantt.init("gantt_here");
  </script>
</body>
```

## Step 3. Preparing a database

```sql
CREATE TABLE `gantt_links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `source` int(11) NOT NULL,
  `target` int(11) NOT NULL,
  `type` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `gantt_tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `progress` float NOT NULL,
  `parent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `gantt_tasks` VALUES ('1', 'Project #1', '2017-04-01 00:00:00',
  '5', '0.8', '0');
INSERT INTO `gantt_tasks` VALUES ('2', 'Task #1', '2017-04-06 00:00:00',
  '4', '0.5', '1');
INSERT INTO `gantt_tasks` VALUES ('3', 'Task #2', '2017-04-05 00:00:00',
  '6', '0.7', '1');
INSERT INTO `gantt_tasks` VALUES ('4', 'Task #3', '2017-04-07 00:00:00',
  '2', '0', '1');
INSERT INTO `gantt_tasks` VALUES ('5', 'Task #1.1', '2017-04-05 00:00:00',
  '5', '0.34', '2');
INSERT INTO `gantt_tasks` VALUES ('6', 'Task #1.2', '2017-04-11 13:22:17',
  '4', '0.5', '2');
INSERT INTO `gantt_tasks` VALUES ('7', 'Task #2.1', '2017-04-07 00:00:00',
  '5', '0.2', '3');
INSERT INTO `gantt_tasks` VALUES ('8', 'Task #2.2', '2017-04-06 00:00:00',
  '4', '0.9', '3');
```

## Step 4. Loading data

```
npm install bluebird --save
npm install promise-mysql --save

npm install date-format-lite --save
```

`server.js`

```js
var Promise = require("bluebird");
require("date-format-lite");

var mysql = require("promise-mysql");
var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gantt",
});

app.get("/data", function (req, res) {
  Promise.all([
    db.query("SELECT * FROM gantt_tasks"),
    db.query("SELECT * FROM gantt_links"),
  ])
    .then(function (results) {
      var tasks = results[0],
        links = results[1];

      for (var i = 0; i < tasks.length; i++) {
        tasks[i].start_date = tasks[i].start_date.format("YYYY-MM-DD hh:mm:ss");
        tasks[i].open = true;
      }

      res.send({
        data: tasks,
        collections: { links: links },
      });
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});
```

`public/index.html`

```js
gantt.config.date_format = "%Y-%m-%d %H:%i:%s";

gantt.init("gantt_here");

gantt.load("/data");
```

## Step 5. Saving changes

`public/index.html`

```js
gantt.config.date_format = "%Y-%m-%d %H:%i:%s";

gantt.init("gantt_here");

gantt.load("/data");

var dp = new gantt.dataProcessor("/data");
dp.init(gantt);
dp.setTransactionMode("REST");
```

`server.js`

```js
// add a new task
app.post("/data/task", function (req, res) {
  var task = getTask(req.body);

  db.query(
    "INSERT INTO gantt_tasks(text, start_date, duration, progress, parent)" +
      " VALUES (?,?,?,?,?)",
    [task.text, task.start_date, task.duration, task.progress, task.parent]
  )
    .then(function (result) {
      sendResponse(res, "inserted", result.insertId);
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

// update a task
app.put("/data/task/:id", function (req, res) {
  var sid = req.params.id,
    task = getTask(req.body);

  db.query(
    "UPDATE gantt_tasks SET text = ?, start_date = ?, " +
      "duration = ?, progress = ?, parent = ? WHERE id = ?",
    [task.text, task.start_date, task.duration, task.progress, task.parent, sid]
  )
    .then(function (result) {
      sendResponse(res, "updated");
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

// delete a task
app.delete("/data/task/:id", function (req, res) {
  var sid = req.params.id;
  db.query("DELETE FROM gantt_tasks WHERE id = ?", [sid])
    .then(function (result) {
      sendResponse(res, "deleted");
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

// add a link
app.post("/data/link", function (req, res) {
  var link = getLink(req.body);

  db.query("INSERT INTO gantt_links(source, target, type) VALUES (?,?,?)", [
    link.source,
    link.target,
    link.type,
  ])
    .then(function (result) {
      sendResponse(res, "inserted", result.insertId);
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

// update a link
app.put("/data/link/:id", function (req, res) {
  var sid = req.params.id,
    link = getLink(req.body);

  db.query(
    "UPDATE gantt_links SET source = ?, target = ?, type = ? WHERE id = ?",
    [link.source, link.target, link.type, sid]
  )
    .then(function (result) {
      sendResponse(res, "updated");
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

// delete a link
app.delete("/data/link/:id", function (req, res) {
  var sid = req.params.id;
  db.query("DELETE FROM gantt_links WHERE id = ?", [sid])
    .then(function (result) {
      sendResponse(res, "deleted");
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

function getTask(data) {
  return {
    text: data.text,
    start_date: data.start_date.date("YYYY-MM-DD"),
    duration: data.duration,
    progress: data.progress || 0,
    parent: data.parent,
  };
}

function getLink(data) {
  return {
    source: data.source,
    target: data.target,
    type: data.type,
  };
}

function sendResponse(res, action, tid, error) {
  if (action == "error") console.log(error);

  var result = {
    action: action,
  };
  if (tid !== undefined && tid !== null) result.tid = tid;

  res.send(result);
}
```

### Storing the order of tasks

`public/index.html`

```js
gantt.config.order_branch = true;
gantt.config.order_branch_free = true;

gantt.init("gantt_here");
```

```sql
CREATE TABLE `gantt_tasks` (
  `id` int(11) NOT NULL  AUTO_INCREMENT PRIMARY KEY,
  `text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `start_date` datetime NOT NULL,
  `duration` int(11) NOT NULL,
  `progress` float NOT NULL DEFAULT 0,
  `parent` int(11) NOT NULL,
  `sortorder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

Or add the column to the table you already have:

```sql
ALTER TABLE `gantt_tasks` ADD COLUMN `sortorder` int(11) NOT NULL;
```

`server.js`

```js
app.post("/data/task", function (req, res) {
  // adds new task to database
  var task = getTask(req.body);

  db.query("SELECT MAX(sortorder) AS maxOrder FROM gantt_tasks")
    .then(function (result) {
      // assign max sort order to the new task
      var orderIndex = (result[0].maxOrder || 0) + 1;

      return db.query(
        "INSERT INTO gantt_tasks(text, start_date, duration, progress, " +
          "parent, sortorder) VALUES (?,?,?,?,?,?)",
        [
          task.text,
          task.start_date,
          task.duration,
          task.progress,
          task.parent,
          orderIndex,
        ]
      );
    })
    .then(function (result) {
      sendResponse(res, "inserted", result.insertId);
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});
```

```js
// update task
app.put("/data/task/:id", function (req, res) {
  var sid = req.params.id,
    target = req.body.target,
    task = getTask(req.body);

  Promise.all([
    db.query(
      "UPDATE gantt_tasks SET text = ?, start_date = ?, duration = ?, progress = ?, parent = ? WHERE id = ?",
      [
        task.text,
        task.start_date,
        task.duration,
        task.progress,
        task.parent,
        sid,
      ]
    ),
    updateOrder(sid, target),
  ])
    .then(function (result) {
      sendResponse(res, "updated");
    })
    .catch(function (error) {
      sendResponse(res, "error", null, error);
    });
});

function updateOrder(taskId, target) {
  var nextTask = false;
  var targetOrder;

  target = target || "";

  if (target.startsWith("next:")) {
    target = target.substr("next:".length);
    nextTask = true;
  }

  return db
    .query("SELECT * FROM gantt_tasks WHERE id = ?", [target])
    .then(function (result) {
      if (!result[0]) return Promise.resolve();

      targetOrder = result[0].sortorder;
      if (nextTask) targetOrder++;

      return db
        .query(
          "UPDATE gantt_tasks SET sortorder = sortorder + 1 " +
            " WHERE sortorder >= ?",
          [targetOrder]
        )
        .then(function (result) {
          return db.query("UPDATE gantt_tasks SET sortorder = ? WHERE id = ?", [
            targetOrder,
            taskId,
          ]);
        });
    });
}
```
