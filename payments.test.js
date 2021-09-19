describe("Helper test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it('should add new payment amount to allPayments', function () {
    submitPaymentInfo();

    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should create payment amount from current values', function () {
    let payment = createCurPayment();

    expect(payment.billAmt).toEqual('100');
    expect(payment.tipAmt).toEqual('20');
    expect(payment.tipPercent).toEqual(20);
  });

  it('should append a new Tr to paymentTbody', function() {
    let curPayment=createCurPayment();
    
    appendPaymentTable(curPayment);

    let curPaymentTd = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curPaymentTd[0].innerText).toEqual('$100');
    expect(curPaymentTd[1].innerText).toEqual('$20');
    expect(curPaymentTd[2].innerText).toEqual('20%');

  });

  it('should append a delete button for payment table', function() {
    let newTr = document.createElement('tr');

    appendPaymentDeleteBtn(newTr);

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
