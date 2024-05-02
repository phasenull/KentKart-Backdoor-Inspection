### DISCLAIMER

Found out that https://www.kentkart.com/cozumler/mobil-uygulama/ has been compromised somehow,
This repo is just a workspace to reverse-engineer the source code of backdoor and report to the required authorities, this was not published for any harmful intentions but only to warn people. ***DO NOT EXECUTE ANY OF THE CODE GIVEN IN THIS REPOSITORY***



### BACKDOOR FLOW
- step 1: script that exist in the root of html (parts/part_1.js) fetches parts/part_2.js from remote server so called "crazy2cdn.com" and injects into the head of root html
- step 2: new injected part (parts/part_2.js) fetches parts/part_3.js from the same remote server and injects into the head also.
- step 3: part_3 redirects to localized scam sites

### NOTES :

Last archive.org snapshot for /cozumler/mobil-uygulama/ was on 24-02-2024 and it did not contain any maliciouse code, idk what happened but malicous part was injected recently.
THEY DO NOT EXIST ON sources/24_02_2024.html (search "_0x2196a7" on sources)

malicious code exists on 3 different script tags:
they start at line 2750, 3045 and 3068 on file sources/02_05_2024.html

DNS records for "crazy2cdn.com" was created last month (see crazy2cdn.com.dns.result)
`Created: 2024-03-29 15:30:54 UTC`

also urls provided on some files depend on "time" so they expired and you wont be able to see responses without going through the process from scratch

please note that this backdoor was probably created by an employee at kentkart

### SNAPSHOTS FOR /cozumler/mobil-uygulama:
CLEAN-VERSION : https://web.archive.org/web/20240224160625/https://www.kentkart.com/solutions/mobile-application/
COMPROMISED-VERSION : https://web.archive.org/web/20240502171725/https://www.kentkart.com/solutions/mobile-application/
