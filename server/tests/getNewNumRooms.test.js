const getNewNumRooms = require("../scripts/helpers/getNewNumRooms").getNewNumRooms;

test('max difference of 1, between 3 and 6 inclusive', () => {
    let num_rooms = 4;
    let new_num_rooms = 0;
    let i = 100;
    while(i){
        new_num_rooms = getNewNumRooms(num_rooms)
        expect([num_rooms - 1, num_rooms, num_rooms + 1]).toEqual(expect.arrayContaining([new_num_rooms]));
        expect(new_num_rooms).toBeLessThan(7);
        expect(new_num_rooms).toBeGreaterThan(2);
        num_rooms = new_num_rooms;
        i--;
    }
});