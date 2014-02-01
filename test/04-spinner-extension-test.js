buster.spec.expose();

describe("IAS", function () {
  before(function() {
    this.timeout = 3000;

    window.scrollTo(0, 0);

    jQuery.ias({
      container : '.listing',
      item: '.post',
      pagination: '.navigation',
      next: '.next-posts a',
      delay: 400
    }).extension(new IASSpinnerExtension());
  });

  after(function() {
    jQuery.ias('destroy');
  });

  it("should display a spinner for ~400 miliseconds", function() {
    var deferred = when.defer();

    watch('.ias-spinner:visible', this.timeout - 500).then(function(time) {
      expect(time).toBeGreaterThan(350);
      expect(time).toBeLessThan(450);

      deferred.resolve();
    });

    scrollDown();

    return deferred.promise;
  });
});