export const generateInvoice = (order) => {
  const content = `
INVOICE
------------------------
Order ID: ${order.id}
Date: ${order.date}
Status: ${order.status}
Payment ID: ${order.paymentId}

ITEMS:
${order.items
  .map(
    (i) => `${i.name} x ${i.qty} = ₹${i.price * i.qty}`
  )
  .join("\n")}

------------------------
TOTAL: ₹${order.total}
`;

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `invoice_${order.id}.txt`;
  a.click();

  URL.revokeObjectURL(url);
};
