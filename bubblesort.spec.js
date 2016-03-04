describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts an array', function(){
    	var something = [4, 2, 8, 16, 1];
        expect( bubbleSort(something) ).toEqual( [1, 2, 4, 8, 16] );
    });

    it('sorts an array', function(){
        expect( bubbleSort([5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5] );
        //
        //
    });

    it('sorts an array', function(){
        expect( bubbleSort([4, 2, 8, 16, 1]) ).toEqual( [1, 2, 4, 8, 16] );
    });


});