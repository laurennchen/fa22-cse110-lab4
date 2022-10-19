1. 3 will be printed because var i has block scope and the for loop would have just ended by line 12, so i would be equal to 3, since prices has a length of 3 and the for loop loops through each of the elements in prices. 
2. 150 will be printed because discountedPrice is defined on line 7 with i=2. prices[2] is 300, and 300 * (1-0.5) is equal to 150. 
3. 150 will be printed because finalPrice was reassigned on line 8, and when i=2, discountedPrice is equal to 150, so 150*100 = 15000, and this divided by 100 is 150. finalPrice has function scope so this is accessible anywhere in the function definition. 
4. This function will return [50, 100, 150] because the for loops loops through all the prices in the list, and it cuts all of the prices in half and adds the new prices to a list that we return at the end.
5. This code causes an error because let has block scope,  so i is not accessible outside of the for loop.
6. This code causes an error because let has block scope, so discountedPrice is not accessible outside of the for loop.
7. 150 will be printed because finalPrice is defined on line 8 with discountedPrice equal to 150 (since i = 2 in last round of for loop iteration), and after the calculations, finalPrice is equal to 150. Since finalPrice was defined outside the for loop, it is accessible outside the for loop, which is why we can print out this value outside the for loop.
8. This function will return [50, 100, 150] because the for loops loops through all the prices in the list, and it cuts all of the prices in half and adds the new prices to a list that we return at the end.
9. This code causes an error because let has block scope, so i is not accessible outside of the for loop.
10. 3 will be printed because length was defined on line 4 (the length of the prices list is 3), and const has block scope, and line 12 is in the same block as line 4.
11. This function will return [50, 100, 150] because the for loops loops through all the prices in the list, and it cuts all of the prices in half and adds the new prices to a list that we return at the end.
12. A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13.
    A) '32' since integers map to their exact string representation
    B) 1 since numeric conversion happens in mathematical expressions, so 3 - 2 = 1
    C) 3 because null is converted to 0, so 3 + 0 = 3
    D) '3null' since integers map to their exact string representation
    E) 4 because true maps to 1
    F) 0 because false maps to 0 and null maps to 0
    G) '3undefined' since integers map to their exact string representation
    H) NaN because undefined is NaN as a number, so 3 - NaN = NaN
14. A) true because string '2' becomes the number 2
    B) false because '2' is greater than the '1' in '12'
    C) true because == does type conversions so 2 == 2 is true
    D) false because === does not do type conversions, and a string is not equal to an integer
    E) false because true maps to 1 and 1 != 2 
    F) true because Boolean(2) = true, and true is equal to true
15. The difference between == and === is that === is a strict equality operator, and == is non-strict. If the values being compared are different types, then === will return false immediately. On the other hand, == will do a type conversion before comparing the 2 values.
17. The result will be [2,4,6]. On line 13, modifyArray() is called, so we will run through this function. We create an empty list, and for each value in [1,2,3], we will call doSomething() on it, and add this result to newArr. For 1, doSomething() returns 2, so this is now in newArr. For 2, doSomething() returns 4, so this is now in newArr. For 3, doSomething() returns 6, so this is now in newArr. modifyArray() then returns this newArr.
19. 1 
    4 
    3 
    2 
