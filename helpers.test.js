describe("Helper test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it('should add bill totals', function () {
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 10;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should add tip totals', function () {

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 10;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(30);
  });

  it('should average tip percentages', function () {

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(30);
  });

  it('should calculate tip percent', function () {
    expect(calculateTipPercent(100,20)).toEqual(20);
    expect(calculateTipPercent(200,50)).toEqual(25);
  });

  it('should append a new Td', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr,'hello');

    expect(newTr.firstChild.innerHTML).toEqual('hello');
  });

  it('should append a delete button', function() {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
