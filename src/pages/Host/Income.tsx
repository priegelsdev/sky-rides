export default function Income() {
  const transactionData = [
    { amount: 1180, date: 'Feb 2, 2031', id: 1 },
    { amount: 880, date: 'Feb 9, 2031', id: 2 },
    { amount: 1780, date: 'Mar 1, 2031', id: 3 },
  ];

  const txAmount = transactionData
    .map((tx) => tx.amount)
    .reduce((acc, val) => acc + val, 0);

  const txElements = transactionData.map((tx) => (
    <div className="flex justify-between bg-secondary text-black rounded-md p-5 mb-3">
      <h2 className="text-2xl font-bold">${tx.amount.toLocaleString()}</h2>
      <p className="text-gray-800">{tx.date}</p>
    </div>
  ));

  return (
    <div className="px-6">
      <div>
        <h1 className="font-bold text-accent text-3xl mt-8 mb-2">Income</h1>
        <h4>
          Last <span className="font-bold underline">30 days</span>
        </h4>
        <h2 className="font-bold text-5xl mt-4">
          ${txAmount.toLocaleString()}
        </h2>
      </div>
      <div className="h-0.5 bg-secondary mt-4"></div>
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">
          Your transactions ({transactionData.length})
        </h1>
        <h4 className="mb-2">
          Last <span className="font-bold underline">30 days</span>
        </h4>
        {txElements}
      </div>
    </div>
  );
}
