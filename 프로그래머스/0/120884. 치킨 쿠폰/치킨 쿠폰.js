function solution(chicken) {
    let coupon = chicken;
    
    // 서비스 
    let service = 0;
    
    // 쿠폰 10개 당 서비스 치킨 1
    while(coupon > 9) {
        // 총 서비스 치킨 개수
        service += Math.floor(coupon / 10)
        
        // 쿠폰 갯수
        // 서비스 치킨으로 받은 쿠폰 + 남은 쿠폰 
        coupon = Math.floor(coupon / 10) + Math.floor(coupon % 10)
    }
    return service
}