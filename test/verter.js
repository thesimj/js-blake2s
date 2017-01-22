function hex2bytes(hexi) {
  return new Uint8Array(hexi.length / 2).map((e, index) => parseInt(hexi[2 * index] + hexi[2 * index + 1], 16));
}

function text2bytes(text) {
  return new Uint8Array(text.length).map((e, index) => text.charCodeAt(index));
}

export default {
  size: 15,
  input: [
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("72")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("2169")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("a1ca17")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("8bf73c70")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("4b07dd752d957e8719c8b99a479c5bac53a0cb68d751918b0ea54d2283659fbc808057305ec50143927d")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("afedf4a485ca4fbceca25aa51e8e5b578eb58f61cfb2554e6a6f80d26749816ac3ec6109796b517172900aa5ce182fb16d47a4")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("6ae1bcbffb666cc860b993ba1e0de11090c2c6b4e3563e203e07454f636e5daae08b0fd4a0a058ea047f87284519bd9a5e44b562d048c2f8912a8a26a857b72d817b7d33fb5b761110dbe4170b6f62")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("4499e624d2d4ab34b596186469d41cf751b8581328b33c4a6b88b50a7ae64ddb85f6c0f505b092538775c9e31b782770e3b0fbe29f7e3eeadc56d055f22782767bfba1c963a480b25110")},
    {len: 32, key: null, salt: null, personalization: null, data: hex2bytes("4f1cf86b247c898884c2cfa6c59cd2d63d21b4c2d41d3e1da8b0c5d4f618b63bd279a54dadbd35f4f15ae9c223267319d58918c270bebf3ad4171635824a7c8be78f3e50c15173489ef98d6b8a88712b5b8247cb856f1b7bb4556dbaf486cf11332905")},

    // +Key //
    {len: 32, key: text2bytes("hello world"), salt: null, personalization: null, data: text2bytes("hello world")},
    {len: 32, key: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"), salt: null, personalization: null, data: hex2bytes("00")},
    {len: 32, key: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"), salt: null, personalization: null, data: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718")},
    {len: 32, key: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"), salt: null, personalization: null, data: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c")},
    {len: 32, key: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"), salt: null, personalization: null, data: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f50515253")},
    {len: 32, key: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f"), salt: null, personalization: null, data: hex2bytes("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f1f2f3f4f5f6f7f8f9fafbfcfdfe")},
  ],
  output: [
    hex2bytes("449f3b2973d6be27a153cee82638d58ed6be0c358dca9af3d73e5a5e17a9849f"),
    hex2bytes("44557371d23c87dac696fcbf08224c6bd1497465ea52d15cc623f79802a3a61a"),
    hex2bytes("4bf967495ab606ee2bed15a299ebce05231ef08cb8fa2a749e846943207de631"),
    hex2bytes("bc3cea20663c14ebac47e53ff3be5f5b203f75d2fe7152091fb21b710cd8ffee"),
    hex2bytes("8cb4861c691c71d00bb8dca02e31b55d00352fb11994ee3e4a9cea4577ac4f9a"),
    hex2bytes("1beb309d6b2fb10c032d9edac84dc27657b13aa2872e8801316752fe28a6659f"),
    hex2bytes("6e8e8e6d6c3a2a17d8595532bb725eb01c5a4093da6d1c3f5dbbfbdd14420966"),
    hex2bytes("274e2449f0e078c7df6dcc27dc346301624d04ad317d95dbdc7d59de588c6f39"),
    hex2bytes("38424602d781c7026330b887c416bb30f48884ed35eab811819d321997a8f943"),

    // +Key //
    hex2bytes("846d7f4e70f94df2b07e2f5d59d271d5b4627ab64cc0fc376f411448528bee49"),
    hex2bytes("40d15fee7c328830166ac3f918650f807e7e01e177258cdc0a39b11f598066f1"),
    hex2bytes("110c50c0bf2c6e7aeb7e435d92d132ab6655168e78a2decdec3330777684d9c1"),
    hex2bytes("cbd6660a10db3f23f7a03d4b9d4044c7932b2801ac89d60bc9eb92d65a46c2a0"),
    hex2bytes("a451b48c35a6c7854cfaae60262e76990816382ac0667e5a5c9e1b46c4342ddf"),
    hex2bytes("3fb735061abc519dfe979e54c1ee5bfad0a9d858b3315bad34bde999efd724dd"),
  ]
};
