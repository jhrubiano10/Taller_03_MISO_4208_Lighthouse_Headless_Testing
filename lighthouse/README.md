# Prueba en Lighthouse

Audit que revisa si el primer llamado al API de la RATP, toma menos de 3 segundos de respuesta

Los resultados y archivos de la pruebas se encuentra en la carpeta [test_lighthouse] la prueba de la llamada a la API se encuentra en la 
carpeta [llamada_api]

## Adición del código.

En el archivo [app.js] en la método ```app.getSchedule``` se establecido la variable ```loadApiTime``` que almacena el valor de la propiedad 
```performance.now()```

## Resultado de la prueba.

Los reportes de lighthouse se encuentra en la carpeta [llamada_api]

![report](https://github.com/jhrubiano10/Taller_03_MISO_4208_Lighthouse_Headless_Testing/blob/master/images/lighhouse_call_API.png?raw=true)


### Autor
* Jorge Rubaino [@ostjh]
* Código: 201510711


License
----
MIT

[@ostjh]:https://twitter.com/ostjh
[test_lighthouse]:https://github.com/jhrubiano10/Taller_03_MISO_4208_Lighthouse_Headless_Testing/tree/master/lighthouse/test_lighthouse
[llamada_api]:https://github.com/jhrubiano10/Taller_03_MISO_4208_Lighthouse_Headless_Testing/tree/master/lighthouse/test_lighthouse/llamada_api
[app.js]:https://github.com/jhrubiano10/Taller_03_MISO_4208_Lighthouse_Headless_Testing/blob/master/lighthouse/scripts/app.js#L140
