import assert from 'assert'


// # 1:
// assert.fail('assertion fail!')

// // # 2:
// try{
//     assert.fail('assertion fail!')
// }
// catch(error){
//     console.log('My error ==> ',error)
//     console.log('My error ==> ',error.message)
// }

// # 3:
try{
    assert.fail(new Error('assertion fail!'))
}
catch(error){
    console.log('My error ==> ',error)
    console.log('My error ==> ',error.message)
}


