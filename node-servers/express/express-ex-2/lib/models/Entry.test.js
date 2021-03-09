var Entry = require('./Entry');

function test_save(entry, page) {
	entry.save(function(err) {
		if (err)
			throw err;
		console.log('save done.');
		test_getRange(page);
	});
}

function test_getRange(page) {
	Entry.getRange(page.from, page.to, function(err, entries) {
		if (err)
			throw err;
		console.log(entries);
	});
}

var entry1 = new Entry({
	"username" : 'user1',
	"title" : 'title1',
	"body" : 'boby1'
});

var entry2 = new Entry({
	"username" : 'user2',
	"title" : 'title2',
	"body" : 'boby2'
});

var page1 = {
	from : 0,
	to : 100,
}

var page2 = {
		from : 1,
		to : 3,
	}

//test_save(entry1, page1);
//test_save(entry2, page1);
test_getRange(page1);
test_getRange(page2);


