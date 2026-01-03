const friends = ['amit', 'shuvo', 'neloy', 'joyonto', 'shanto'];
console.log(friends);
friends.shift()
console.log(friends)
// shiftar kag hoylo first ar element bad day
// ar pop ar kag hoylolast ar thaka bad day


// unshift ar kag hoylo notun element first a add kora daoa
friends.unshift('bangladesh')
console.log(friends)

// output amon hoba
// [ 'amit', 'shuvo', 'neloy', 'joyonto', 'shanto' ]
// [ 'shuvo', 'neloy', 'joyonto', 'shanto' ]
// [ 'bangladesh', 'shuvo', 'neloy', 'joyonto', 'shanto