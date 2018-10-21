# AnnabelleJS

### Instalation
```
$ yarn global add annabelle
$ # or 
$ npm install -g annabelle
```
### Usage
read this an [example.config](/blob/master/.example.config.json).
- create configuration file 
```
# Create config.json (whatever name of file)
# use this format 
# key 
  - name<string> name of your file 
  - endpoins<array> an array of list all your endpoint
  - output<string> target path for generate file
{
    "name": "Profile",
    "endpoints": [
        "GET /banner/banner",
        "POST /banner/banner",
        "GET /banner/banner/{bannerId}",
        "POST /banner/banner/{bannerId}",
        "DELETE /banner/banner/{bannerId}"
    ],
    "output": "./Services"
}

# save as .json
```
- run annabelle cli  
```
$ annabelle -c config.json
$ check your generated file on output directory 
``` 

### Contribute 
- Fork This [annabelle](https://github.com/ri7nz/AnnabelleJS)
- Send Pull Request
- Create An issue 
- I am very open please give advice & feedback
