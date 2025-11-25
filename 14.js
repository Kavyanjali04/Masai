function evaluateEmployees(list) {
  let filtered = list.filter(function(emp) {
    return emp.tasksCompleted > 5;
  });

  let mapped = filtered.map(function(emp) {
    let level = "";

    if (emp.rating > 4.5) {
      level = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      level = "Good";
    } else {
      level = "Needs Improvement";
    }

    return { name: emp.name, performance: level };
  });

  let order = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };

  mapped.sort(function(a, b) {
    return order[b.performance] - order[a.performance];
  });

  return mapped;
}

let employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

let result = evaluateEmployees(employees);
console.log(result);
