---
description: 'Author: RootHarpy'
icon: spider-web
---

# The secret doors

A cunning login challenge requiring precise credentials The secret door opens for shorif\_0x3c

{% embed url="https://tboctf.great-site.net/f07a1c2d9e4b5a6f.php" %}

<figure><img src="../.gitbook/assets/Screenshot (448).png" alt=""><figcaption></figcaption></figure>



**Solution:**

The username is hinted at in the question. username: shorif\_0x3c

So, for a known username, it is mostly suggested to do a dictionary password attack. As it is more likely to succeed at this method. So I used Burp Suite's intruder method at first. But it was in vain.

Next, I did common password attack.. which has some common passwords, like

> admin\
> password\
> 12345\
> qwerty

But it was also in vain. \
\
After that I tried to use a blank password. But the HTML form required writing something in the password field. For that I did a workaround by omitting the "required" attribute from the form's password field.&#x20;

<figure><img src="../.gitbook/assets/Screenshot (449).png" alt=""><figcaption></figcaption></figure>



Then I tried to submit the login form. And it was successful! 🥳

<figure><img src="../.gitbook/assets/Screenshot (450).png" alt=""><figcaption></figcaption></figure>

