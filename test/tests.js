const test = QUnit.test;




test('if the number is <.5, show cat', function(assert){
    const result = catOrDog(.2);
    assert.equal(result, 'cat');
});

test('if the number is >=.5, show dawg', function(assert){
    const result = catOrDog(.6);
    assert.equal(result, 'dog');
});


