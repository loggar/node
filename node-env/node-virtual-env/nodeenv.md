# nodeenv

## create virtualenv (python)

```
$ virtualenv .venv
```

## activate virtualenv

```
$ .venv\Scripts\activate

(.venv) λ where python

(.venv) λ python --version

(.venv) λ pip --version
```

## install nodeenv

```
(.venv) λ pip install nodeenv

(.venv) λ pip show nodeenv
```

## create nodeenv

this requires administrator privilige(Windows)

```
(.venv) λ nodeenv -p

# or 

(.venv) λ nodeenv --node=8.10.0 .env
```

* `-p`: `--prebuilt`
* `--node`: node version

## deactivate venv

```
(.venv) λ deactivate
```

## activate nodeenv

```
$ .nodeenv\Scripts\activate

(.nodeenv) λ node --version

(.nodeenv) λ npm --version
```

## deactivate nodeenv

```
(.nodeenv) λ .nodeenv\Scripts\deactivate
```
