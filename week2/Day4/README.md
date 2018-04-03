## Here's use caporal with logic combination

This is exercises (see file : app.js) for using caporal with logic combination. 

[Exercises 3] : https://gist.github.com/mul14/dd1da075b95fa7332d568ecf57babe0e

1. **String Transformation.**

make some function and combination with coporal :

Output example :
```javascript
./app.js lowercase "I aM CrAzY TeXT"
# Output "i am crazy text"

./app.js uppercase "I aM CrAzY TeXT"
# Output "I AM CRAZY TEXT"

./app.js capitalize "I aM CrAzY TeXT"
# Output "I Am Crazy Text"
```

2. **Arithmetic.**

make some function and combination with coporal :

Output example :
```javascript
./app.js add 1 4 5 2 3
# Output 15

./app.js subtract 10 2 4
# Output 4

./app.js multiply 3 5 8
# Output 120

./app.js divide 100 5 2
# Output 10
```

3. **Palindrome.**

make some function and combination with coporal :

Input & Output example :
```javascript
Input : 
./app.js palindrome "Saya ingin pergi ke pasar"
./app.js palindrome "Ibu Ratna antar ubi"

Output : 
String: "Saya ingin pergi ke pasar"
Is palindrome? No

String: "Ibu Ratna antar ubi"
Is palindrome? Yes
```
4. **Obfuscator.**

make some function and combination with coporal :

Input & Output example :
```javascript
Input : 
./app.js obfuscate "email@example.com"

Output : 
&#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;
```
5. **Random String.**

make some function and combination with coporal :

Input & Output example :
```javascript
Output : 
./app.js random
# Output Nf2HZlmJ9TItezKL1EcVrstKjxzLaQj8

./app.js random --length=10
# Output l1BgUotRmS

./app.js random --letters=false
# Output 83628194739182748381981283721982

./app.js random --numbers=false
# Output kdBOsSSFvqLCRvommVauHzmPdvSoYRIs

./app.js random --uppercase
# Output 9JWSY6OOTNPJ6LZLUQE9JIXWPQTLC0K2

./app.js random --numbers=false --lowercase --length=20
# Output ljmuoyopwxcvhycowqqi
```

6. **Get IP Address in private network.**

make some function and combination with coporal :

Input & Output example :
```javascript
Input :
./app.js ip

Output:
192.168.100.17
```
Get External IP Address

use method promise function 
```javascript
Input :
./app.js ip-external

Output :
180.253.116.29
```

8. **Get headlines from https://www.kompas.com/**

make some function and combination with coporal :

Input & Output example :
```javascript
Input : 
./app.js headlines

Output :
#12 Get all information about new movies in theaters for today from http://www.21cineplex.com/nowplaying

TITLE: PPP Nilai Pernyataan Prabowo soal Elite Bagian dari Strategi Jelang 2019
URL: https://nasional.kompas.com/read/2018/04/02/18502521/ppp-nilai-pernyataan-prabowo-soal-elite-bagian-dari-strategi-jelang-2019

TITLE: Panggil Dua Menteri ke Istana, Jokowi Tanya soal Impor Garam
URL: https://nasional.kompas.com/read/2018/04/02/19225381/panggil-dua-menteri-ke-istana-jokowi-tanya-soal-impor-garam

TITLE: Fraksi Gerindra Nilai OK OCE Tak Bisa Atasi Pengangguran di Jakarta
URL: https://megapolitan.kompas.com/read/2018/04/02/19182321/fraksi-gerindra-nilai-ok-oce-tak-bisa-atasi-pengangguran-di-jakarta

TITLE: Xpander Sukses Borong Penghargaan di Tahun Pertamanya
URL: https://pubads.g.doubleclick.net/gampad/jump?iu=/31800665/KOMPAS.COM/home&sz=740x500&t=Pos=HL4&c=20180207111
```
9. **Import/Export CSV/XLS/XLSX file.**

make some function and combination with coporal :

Input & Output example :
```javascript
Input :
./app.js convert report2018.xlsx report2018.csv

Output : 
see file : report2018.csv
```

10. **Get a screenshot from a URL.**

- Instll package NPM 'puppeteer'
make some function and combination with coporal :

Input & Output example :
```javascript
Input : 
./app.js screenshot https://google.com --format=png

Output :
see file : google.png
```

11. **Get screenshots from a list of file.**

make some function and combination with coporal :

Input & Output example :
```javascript
Input : ./app.js screenshot-list list.txt --format=jpg

Make sure the file already exist : 
https://google.com
https://en.wikipedia.org/wiki/JavaScript
https://en.wikipedia.org/wiki/ECMAScript

Output :
see the folder : simpan
```

12. **Get all information about new movies in theaters for today from https://www.cgv.id.**

make some function and combination with coporal :

Input & Output example :
```javascript
Input :
./app.js movies

Output :
TOMB RAIDER


STARRING : Alicia Vikander , Dominic Wes , Walton Goggins

DIRECTOR : Roar Uthaug

CENSOR RATING : 13+

GENRE : ACTION

LANGUAGE : English

SUBTITLE : BAHASA INDONESIA

DURATION : 119 Minutes

Lara Croft, putri seorang petualang, harus berusaha melampaui batas dirinya saat dia menemukan dirinya berada di pulau tempat ayahnyamenghilang.

Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.

=========================================================================================================

RED SPARROW


STARRING : Jennifer Lawrence , Joel Edgerton , Matthias Schoenaer

DIRECTOR : Francis Lawrence

CENSOR RATING : 21+

GENRE : THRILLER

LANGUAGE : English

SUBTITLE : BAHASA INDONESIA

DURATION : 138 Minutes

Ballerina Dominika Egorova direkrut ke 'Sparrow School' sebuah badan intelijen Rusia di mana dia dipaksa untuk menggunakan tubuhnya sebagai senjata. Tapi misi pertamanya, yang menargetkan agen CIA, mengancam untuk mengungkap keamanan kedua negara.

Ballerina Dominika Egorova is recruited to 'Sparrow School' a Russian intelligence service where she is forced to use her body as a weapon. But her first mission, targeting a CIA agent, threatens to unravel the security of both nations.

=========================================================================================================

PARTIKELIR


STARRING : Pandji Pragiwaksono, Deva Mahenra, Aurelie Moeremans

DIRECTOR : Pandji Pragiwaksono

CENSOR RATING : 13+

GENRE : COMEDY

LANGUAGE : BAHASA INDONESIA

SUBTITLE : None

DURATION : 99 Minutes

Adri (Pandji Pragiwaksono) dan Jaka (Deva Mahenra) sahabat sejak SD sampai SMA. Mereka terobsesi jadi detektif. Adri lebih berani danberpikir cepat, sementara Jaka strategis dan berpikir panjang. Ketika SMA, mereka dikenal sering mengurusi kasus-kasus di sekolah. Dari “Misteri Berkurangnya Bihun Risol”, "Misteri Hilangnya Gesper Kepala Sekolah" dan "Misteri Kancut Penyumbat WC Sekolah". Sebuah kasus berdampak kepada persahabatan mereka, mereka terpisah pada saat kuliah. Jaka sudah kerja sebagai pengacara di Law Firm Litigasi, sementara Adri masih ngotot dengan cita-citanya dan jadi detektif partikelir (swasta). Suatu hari, Adri menerima job dari perempuan cantik, Tiara (Aurelie Moeremans) yang tiba-tiba ayahnya tertembak. Itu membuat Adri ada di tengah kasus serius dan minta bantuan Jaka.

=========================================================================================================
```