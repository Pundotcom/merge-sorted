import merge  from "./merge";


describe('Test merge sorted arrays function' ,() => {
    it('should return array sorted in ascending order ' , () => {
        const array1 = [1,3,4,7];
        const array2 = [2,5,6,8,12];
        const result = merge(array1 , array2);
        expect(result).toEqual([1,2,3,4,5,6,7,8,12]);
    });
    it('should return array sorted in ascending order using sort function' , () => {
        const array1 = [1,3,5,6,9];
        const array2 = [11,23,45,67,89];
        const result = merge(array1 , array2);
        let array3 = (array1.concat(array2)).sort((a,b) => a-b);
        expect(result).toEqual(array3);
    });
});
describe('Test merge sorted arrays function' ,() => {
    it('should return an array of size arr1.length + arr2.length' , () => {
        const array1 = [1,3,5,6,9];
        const array2 = [11,23,45,67,89];
        const result = merge(array1 , array2);
        expect(result.length).toBe(array1.length + array2.length);
    });
});
describe('Test merge sorted arrays function' ,() => {
    it('should return empty array' , () => {
        const array1 : number[] = [];
        const array2 : number[] = [];
        const result = merge(array1 , array2);
        expect(result).toEqual([]);
    });
    it('should return empty array' , () => {
        const array1 : number[] = [];
        const array2 : number[] = [];
        const result = merge(array1 , array2);
        expect(result.length).toBe(0);
    });

});






