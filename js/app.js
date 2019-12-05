let originalText = prompt('Enter text');
let arr = originalText.split(' ');
const alphabet = {
    a: 'Alpha',
    A: 'Alpha',
    b: 'Bravo',
    B: 'Bravo',
    c: 'Charlie',
    C: 'Charlie',
    d: 'Delta',
    D: 'Delta',
    e: 'Echo',
    E: 'Echo',
    f: 'Foxtrot',
    F: 'Foxtrot',
    g: 'Golf',
    G: 'Golf',
    h: 'Hotel',
    H: 'Hotel',
    i: 'India',
    I: 'India',
    j: 'Juliet ',
    J: 'Juliet ',
    k: 'Kilo',
    K: 'Kilo',
    l: 'Lima',
    L: 'Lima',
    m: 'Mike',
    M: 'Mike',
    n: 'November',
    N: 'November',
    o: 'Oscar',
    O: 'Oscar',
    p: 'Papa',
    P: 'Papa',
    q: 'Quebec',
    Q: 'Quebec',
    r: 'Romeo',
    R: 'Romeo',
    s: 'Sierra',
    S: 'Sierra',
    t: 'Tango',
    T: 'Tango',
    u: 'Uniform',
    U: 'Uniform',
    v: 'Victor',
    V: 'Victor',
    w: 'Whiskey',
    W: 'Whiskey',
    x: 'X-ray',
    X: 'X-ray',
    y: 'Yankee',
    Y: 'Yankee',
    z: 'Zulu',
    Z: 'Zulu',
    0: 'Nadazero',
    1: 'Unaone',
    2: 'Bissotwo',
    3: 'Terrathree',
    4: 'Kartefour',
    5: 'Pantafive',
    6: 'Soxisix',
    7: 'Setteseven',
    8: 'Oktoeight',
    9: 'Novenine',
};
console.log(originalText);
originalText = '';
for (let i = 0; i < arr.length; i++) {
    originalText += arr[i];
}
arr = originalText.split('');
originalText = '';
for (let i = 0; i < arr.length; i++) {
    originalText += alphabet[arr[i]] + ' ';
}
console.log(originalText);
