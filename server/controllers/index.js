const lightwallet = require("eth-lightwallet");

module.exports = {
  newmnemonic: {
    post: async (req, res) => {
      let mnimonic;
      try {
        mnemomic = lightwallet.keystore.generateRandomSeed();
        res.send(mnemomic);
      } catch (err) {
        console.log(err);
      }
    },
  },
  newwallet: {
    post: async (req, res) => {
      const mnemonic = req.body.mnemonic;
      const password = req.body.pwd;
      console.log(mnemonic);
      try {
        lightwallet.keystore.createVault(
          {
            password: password,
            seedPhrase: mnemonic,
            hdPathString: "m/0'/0'/0'",
          },
          function (err, ks) {
            ks.keyFromPassword(password, function (err, pwDerivedKey) {
              ks.generateNewAddress(pwDerivedKey, 1);

              let address = ks.getAddresses().toString();
              let keystore = ks.serialize();

              res.json({ keystore: keystore, address: address });
            });
          }
        );
      } catch (exception) {
        console.log(` >>> newWallet ${exception}`);
      }
    },
  },
};
