
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('have urls', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

         it('have name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
         })
    });


    describe('The menu', function(){

        var body = document.body;
        var menuIcon = $('.menu-icon-link');

         it('menu hidden by default', function(){
            expect($(body).hasClass('menu-hidden')).toBe(true);
         });

          it('menu toggles changes', function(){
             menuIcon.click();
             expect($('body').hasClass('menu-hidden')).toBe(false);

             menuIcon.click();
             expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });

    describe('Initial Entries', function(){

         beforeEach(function(done){
            loadFeed(1, done);
         });

         it('should be at least 1 .entry element within .feed', function(){
            var feedNum = $('.feed').find('.entry').length;
            expect(feedNum).toBeGreaterThan(0);
         })
    });

    describe('New Feed Selection', function() {

        let olderContent, newContent;
        beforeEach(function(done) {
            loadFeed(0, function() {
                //old feed
              olderContent = $(".feed").html();
              loadFeed(1, function() {
                //New feed
                newContent = $(".feed").html();
                done();
                });
              });

        });

        //Test to see if content in feed changes when loaded
        it('new feed content changes', function(done) {
            expect(olderContent).not.toBe(newContent);
             done();
        });
    });

}());
