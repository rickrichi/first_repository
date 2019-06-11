const FundRaise = artifacts.require('./DevCoin.sol')
  contract('DevCoin', function ([owner, donor]) {
    let devCoin
    beforeEach('setup contract for each test', async function () {
      devCoin = await DevCoin.new(owner)
    })
    it('has an owner', async function () {
      assert.equal(await devCoin.owner(), owner)
    })
    it('is able to accept funds', async function () {
      await devCoin.sendTransaction({ value: 1e+18, from: donor })
      const devCoinAddress = await devCoin.address
      assert.equal(web3.eth.getBalance(fundRaiseAddress).toNumber(), 1e+18)
    })
})