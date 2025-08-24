---
description: (I forgot the original question, yet I have the answers.)
icon: binary-lock
---

# RSA Encryption

The question was to decode the message with the private key provided.

encrypted\_message\_b64 = 'GoUl4qxpPzNujGprriG7Xzbtk2/qG3poER2E9HRrlWtuYm9mKIXIpGaxUmy4elmXe+OKD79RbbXIS/k53Ivy5muggZVpx/oZrQlB45Pi0rYuvPrzJ1qqI5Vcnw9f99o61CAmth+YHvmy+AS51rWxn/j8OO9ZIYvSJWSIkiWpH5k7txgDswpB0/Z33YFexEfsPZpQ04BmndcYrdPO551FkBwcZ89D1MYcJ/wJUtaBjOS9EhZZa00Tn+QUWJcjwLsVHgR4eocefN2FfNfpHnKcR7waP+vS5u/OhnmTB/demSsx9geJ/09KqZKRpqIo3crTxKdM9sjKSRQMucjKrheuEg=='

{% file src="../../.gitbook/assets/private_key.pem" %}



**Solution 1**

**:**

This problem was to decrypt a message that was previously encoded with RSA or some variant of RSA.\
The private key also was given. So we just need to try all the variants of RSA to decrypt the message.



To do that, I used an online tool:

[https://devbeaver.com/rsa-encryption-decryption-tool](https://devbeaver.com/rsa-encryption-decryption-tool)



There were several RSA variants. I had to try all of them. ![](<../../.gitbook/assets/image (1).png>)



<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

```
The decryption worked with OAEP padding (not PKCS1v15, which failed with a UTF-8 decoding error)
The decrypted message revealed the flag: BOCTF{Rsa_i5_s3cUr3}
```



**Solution 2:**



I also generated a script to decrypt the message with the Python package "cryptography."

The script is as follows:

```python
import base64
import subprocess
import sys

# Install cryptography if not available
try:
    from cryptography.hazmat.primitives import serialization, hashes
    from cryptography.hazmat.primitives.asymmetric import rsa, padding
except ImportError:
    print('Installing cryptography...')
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'cryptography'])
    from cryptography.hazmat.primitives import serialization, hashes
    from cryptography.hazmat.primitives.asymmetric import rsa, padding

# The encrypted message (base64 encoded)
encrypted_message_b64 = 'GoUl4qxpPzNujGprriG7Xzbtk2/qG3poER2E9HRrlWtuYm9mKIXIpGaxUmy4elmXe+OKD79RbbXIS/k53Ivy5muggZVpx/oZrQlB45Pi0rYuvPrzJ1qqI5Vcnw9f99o61CAmth+YHvmy+AS51rWxn/j8OO9ZIYvSJWSIkiWpH5k7txgDswpB0/Z33YFexEfsPZpQ04BmndcYrdPO551FkBwcZ89D1MYcJ/wJUtaBjOS9EhZZa00Tn+QUWJcjwLsVHgR4eocefN2FfNfpHnKcR7waP+vS5u/OhnmTB/demSsx9geJ/09KqZKRpqIo3crTxKdM9sjKSRQMucjKrheuEg=='

# Decode the base64 encoded message
encrypted_message = base64.b64decode(encrypted_message_b64)

# Read the private key
private_key_pem = '''-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA0g6GP4pPL524p7/LdfjpxscvWUZ/CVWjqUA6ejQsBgY3aVSl
240FY6/RBo+nGP+58G/8MtnaLZDXi53KVOg32wrbhh2N2XWYcUGEW+osgIEMkjFu
6NKkOGqYs2NC7b42l0CULvdaSDZOrruqomIPAotDAd64Vf9y2Ic09QLOxpmGxSBE
TXBDXm0a+Rqf3W9gIQOZp4tJfLJMzxrZHVUp8xzmMtJDzAqvo/1fE7WJLvEVDCs+
5lY3oxDy82QzP35eAHHYVeKlRwzaDTkYH9oAT03O/pit5BX1+mrr7CddznH+iQI9
9c0ou7yoxmHkK+fy0obg4lDF+879jWtSX6TnmwIDAQABAoIBACQvsFzd3MpdJ2Ru
nARUvyEpSzTb+iKHiEwt7mUC+9qF06HnnTL3VkhYD3BL6wNZepS7Ff1EnltfKmK4
6hQ6dPTdJ/gwuzENGxfXq4+SBdyVXq8IqQyezP+TDX9JyEvgitL/owd8QSdTg7aC
SeDzd5Z+myqFTcgy23wFvs++jhSUKkcFz4jEI8U5dUjJDHxTTa44OCqM6uGzwDxb
hzHPpCUb6uwWb7pG8Ye/DOYGuJVGs+RxUfdoOJ7JqB87AEWN3HLVEOYvX1jY0wZA
Onp2+bkdJChpVmZLac3FM0iGAESGxp5asFdWbfLv6eXsKk8qko0iZQYjp+KuMPox
uFe0ZHECgYEA6cSSk4TBBW5eA3m6WYmnhgBj0wlgijFaPo579HuL+xjuE6Ta+lNa
5TU3lFxoERqML3Wk3cPehCetlwhfrKCgzvMn/Q3mUeeIYYr3LHrhoPn9GOFyGM9M
m3mZm1ETFjWGREA4mvRgdIvgYTOArw76RkonhVoPthDV0qzVnFCMk1UCgYEA5gir
Spj73v1RkCsEjGgxYY2OiL5AB3otEL6Eaz7QQjMc0WAWIQxr3GvEMKNbd+X42NGW
mvwNT0gAHOguNrOWXASAayXgWvymn0Ix8NgL6fc9dEaoQ7tcYCUkjacolBcyT7tb
a7k1zSTMV8RyGFS77npiHsvyMr0rD2LzKkIkby8CgYEA1AJoYQvcNv3Cm+pRXJUg
bsJ5xlLR0GM0EloNB0zpRkB04zH3O2JPpGLgVlh8NU7bZsuOS2Yxr6+AmuKISrqf
PTF/ydxKT2vp33U1+Iw1h1ZR+be1T9TqCHN/IUKlSdYfQFTyQW5y8CBPzjf0dE/k
Ic1tDF8Csr+P/PKtBIh1BcUCgYEAn4WTg//jaxgw39F1LglzdTs9hQaqUIUhi2MT
YWwF8GKRsYD416JNimYRf8lJPTR2BaYS0xfIAxrjOSiqI7UWqGlWxPdXRsG+quK0
z1iDqpSSQXheZ9oejW40kydAtLIBadl75JBkBwdlzdelZ8obKZ4lPUYhh543pkvw
ZXXI3nECgYEAwT5UbDnGBJZZljILTNhePyV1nMI01eBXJrSeqpYu8Xak9xmIO8Lj
rsLbdFVLIPt/FzSldinDcFeeksB/hr4mVl/Wh0ZOMZGt/q9hJ7QYsC43IbdHgziZ
4Tv/XPCO94kdbidCOtl2JOs8Y4c9lrgqNvy37y5IGhIICAkKVjVqG0E=
-----END RSA PRIVATE KEY-----'''

# Load the private key
private_key = serialization.load_pem_private_key(
    private_key_pem.encode('utf-8'),
    password=None,
)

print('RSA CTF Challenge Decryption')
print('=' * 40)

try:
    # Try PKCS1v15 padding first (most common)
    decrypted_message = private_key.decrypt(
        encrypted_message,
        padding.PKCS1v15()
    )
    print('Successfully decrypted with PKCS1v15 padding:')
    result = decrypted_message.decode('utf-8')
    print(result)
    print(f'FLAG: {result}')
except Exception as e:
    print(f'PKCS1v15 padding failed: {e}')
    
    try:
        # Try OAEP padding as alternative
        decrypted_message = private_key.decrypt(
            encrypted_message,
            padding.OAEP(
                mgf=padding.MGF1(algorithm=hashes.SHA256()),
                algorithm=hashes.SHA256(),
                label=None
            )
        )
        print('Successfully decrypted with OAEP padding:')
        result = decrypted_message.decode('utf-8')
        print(result)
        print(f'FLAG: {result}')
    except Exception as e2:
        print(f'OAEP padding failed: {e2}')
        print('All decryption attempts failed')
```



Output:

```
Flag: BOCTF{Rsa_i5_s3cUr3}
```



