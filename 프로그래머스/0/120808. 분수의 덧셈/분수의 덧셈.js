function gcdFunc(a, b) {
    return a % b === 0 ? b : gcdFunc(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let denom3 = denom1 * denom2;
    let numer3 = numer1 * denom2 + numer2 * denom1;

    let gcd = gcdFunc(numer3, denom3);
    
    numer3 /= gcd;
    denom3 /= gcd;
    
    return [numer3, denom3];
}