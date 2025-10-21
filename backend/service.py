import requests

BASE_URL = "https://randomuser.me/api/?results="

def service_random_users(count=10):
    try:
        
        response = requests.get(f"{BASE_URL}{count}")
        data = response.json()
        
        if not data["results"]:
            print("No existe data de la API")
            return None
        
        users = []
        for user in data["results"]:
            user_info = {
                "nombre": f" {user['name']['first']} {user['name']['last']}",
                "genero": user["gender"],
                "ubicacion": f"{user['location']['city']}, {user['location']['state']}, {user['location']['country']}",
                "correo": user["email"],
                "fecha_nacimiento": user["dob"]["date"],
                "fotografia": user["picture"]["large"]
            }
            users.append(user_info)      
        return users
    except Exception as err:
        print("Error en la funcion de servicio", err)
        return None