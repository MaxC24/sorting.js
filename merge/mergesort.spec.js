describe('Split Array function', function() {
  it('returns an array', function() {
  	var result = split([]);
  	expect (Array.isArray(result)).toEqual(true);
    // your code here 
  });

it('returns an array with length two', function() {
  	var result = split([]);
  	expect (result.length).toEqual(0);
    // your code here 
  });

 it('returns an array containing an array for each element in original array', function() {
  	var result = split([1, 3, 5, 7, 5, 6]);
  	expect (result.length).toEqual(6);
    // your code here 
  });  

});



describe('Merge Sort', function(){
    it('returns an array containing an array for each element in original array', function() {
  	var result = merge([1,4,5,8], [3,6,7,10]);
  	expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 10]);
    // your code here 
  });  
});