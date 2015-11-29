describe("A suite", function() {
  it("check a field that has specific value", function() {
    setFixtures("<input id='username' value='elon'>");
    expect($('#username').val()).toEqual('elon');
  });
});
