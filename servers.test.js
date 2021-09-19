describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if there is no name inputed', function () {
    serverNameInput.value = '';

    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('add server to server table', function () {
    submitServerInfo();

    let serverTableList = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverTableList[0].innerText).toEqual('Alice');
    expect(serverTableList[1].innerText).toEqual('$0.00');

  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
