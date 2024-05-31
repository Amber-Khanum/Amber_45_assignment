function make_sandwich(...items:string[]): void {
    console.log('Making sandwich with these items:')
    for(let i=0; i<items.length; i++){
        console.log('- '+ items[i])
    };
};
make_sandwich('avocado','scrambled egg', 'salt', 'pepper');
make_sandwich('tuna', 'mayonnaise', 'lettuce');
make_sandwich('sausages', 'cheese');