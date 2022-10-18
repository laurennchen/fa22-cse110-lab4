1. 3 will be printed because var i has block scope and the for loop would have just ended by line 12, so i would be equal to 3, since prices has a length of 3 and the for loop loops through each of the elements in prices. 
2. 150 will be printed because discountedPrice is defined on line 7 with i=2. prices[2] is 300, and 300 * (1-0.5) is equal to 150. 
3. 150 will be printed because finalPrice was reassigned on line 8, and when i=2, discountedPrice is equal to 150, so 150*100 = 15000, and this divided by 100 is 150. finalPrice has function scope so this is accessible anywhere in the function definition. 
4. This function will return [50, 100, 150] because this function cuts all of the prices in half.
5. This code causes an error because let has block scope,  so i is not accessible outside of the for loop.
6. This code causes an error because let has block scope, so discountedPrice is not accessible outside of the for loop.
7. 150 will be printed because finalPrice is defined on line 8 with discountedPrice equal to 150 (since i = 2 in last round of for loop iteration), and after the calculations, finalPrice is equal to 150. Since finalPrice was defined outside the for loop, it is accessible outside the for loop, which is why we can print out this value outside the for loop.
8. This function will return [50, 100, 150] because the function cuts all of the prices in half. 
9. This code causes an error because let has block scope, so i is not accessible outside of the for loop.
10. 3 will be printed because length was defined on line 4, and const has block scope, and line 12 is in the same block as line 4.
11. This function will return [50, 100, 150] because the function cuts all of the prices in half.
12. A) student.name
    B) student['Grad Year']
    C) student.greeting();
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13.
    A) '32' since integers map to their exact string representation
    B) 1 since
    C) 3
    D) '3null' since integers map to their exact string representation
    E) 4 because true maps to 1
    F) 0 
    G) '3undefined' 
    H) NaN
14. A) true
    B) false
    C) true
    D) false
    E) false because true maps to 1 and 1 != 2
    F) true
15. the difference between == and === is that 
