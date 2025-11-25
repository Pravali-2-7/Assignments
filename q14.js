const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

function processEmployees(data) {
  const levelOrder = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  return data
    .filter(emp => emp.tasksCompleted > 5)
    .map(emp => {
      let performance =
        emp.rating > 4.5
          ? "Excellent"
          : emp.rating >= 3
          ? "Good"
          : "Needs Improvement";

      return { name: emp.name, performance };
    })
    .sort((a, b) => levelOrder[b.performance] - levelOrder[a.performance]);
}

const result = processEmployees(employees);
console.log(result);
