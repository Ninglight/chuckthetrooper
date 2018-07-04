import JokesStore from './../JokesStore'

const storeTest = new JokesStore()

test('assigne right query to updateQuery function', () => {
    storeTest.updateQuery('rifle')
    expect(storeTest.query).toBe('rifle');

});

test('try to test only one return to update results', async () => {

    storeTest.updateQuery('He just jumps and chooses when to come down.')
    storeTest.updateResults(storeTest.query)

    const jokes = await storeTest.results

    expect(jokes).toBeDefined()
});