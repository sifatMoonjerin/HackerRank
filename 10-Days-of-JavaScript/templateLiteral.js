const  sides = (literals, expressions) => {
   const [a, p] = expressions;
   const root = Math.sqrt((p*p)-(16*a))
   const s1 = (p + root)/4;
   const s2 = (p - root)/4;
   return [s1, s2].sort((a,b) => a-b); 
}  



console.log(sides( [ 'The area is: ', '.\nThe perimeter is: ', '.' ],[ 140, 48 ]));