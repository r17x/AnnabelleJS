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
#  - name<string> name of your file 
#  - endpoins<array> an array of list all your endpoint
#  - output<string> target path for generate file
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
- Yeah! this is an output powered by annabelle 
```
import axios from 'axios'


export const GetProfiles = () => {
  return axios
    .get(`/banner/banner`)
    .then(({data}) => data)
    .catch( (e) => {
      throw e
    })
}


export const SaveProfile = (data) => {
  return axios
    .post(`/banner/banner`, {data: data})
    .then(({data}) => data)
    .catch( (e) => {
      throw e
    })
}


export const GetProfile = (bannerId) => {
  return axios
    .get(`/banner/banner/${bannerId}`)
    .then(({data}) => data)
    .catch( (e) => {
      throw e
    })
}


export const SaveProfiles = (bannerId, data) => {
  return axios
    .post(`/banner/banner/${bannerId}`, {data: data})
    .then(({data}) => data)
    .catch( (e) => {
      throw e
    })
}


export const DeleteProfile = (bannerId) => {
  return axios
    .delete(`/banner/banner/${bannerId}`)
    .then(({data}) => data)
    .catch( (e) => {
      throw e
    })
}
```
### Contribute 
- Fork This [annabelle](https://github.com/ri7nz/AnnabelleJS)
- Send Pull Request
- Create An issue 
- I am very open please give advice & feedback
