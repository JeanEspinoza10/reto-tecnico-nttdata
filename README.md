# Reto Técnico
El presente reto técnico consiste en desarrollar un servicio que consume la siguiente https://randomuser.me/documentation para la generación de nombres aleatorios.

# Propuesta -  Selección de Técnologias
- Dentro de mi experiencia profesional tengo manejo principal del lenguaje de python y javascript. 
Por ende, propuse el desarrollo de un servidor web(Api Restfull Json) para el backend con flask(Python) y
para el consumo de esta Api RestFull solamente utilizando Javascript y HTML5.

- En el diagrama de **diagrama.drawio** esta el flujo de los datos desde el Frontend hasta el consumo de la ApiRest.

![Diagrama del sistema](docs/diagrama.svg)


# Despliegue
## 1. BACKEND
- Ingresar a la carpeta backend, crear entorno virtual, activar entorno virtual e instalar las dependencias.
```python
python -m venv venv
source venv/bin/activate # Linux
pip install -r requirements.txt
``` 
- Correr la aplicación 
```python
python main.py
``` 

## 2. Frontend
- En tu navegador de tu preferencia visualiza el archivo frontend/index.html para poder visualizar el consumo de la Api Restfull.
