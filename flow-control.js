function basicTeenager(age) {
  if (age > 12 && age < 20)
  return 'You are a teenager!'
}

function teenager(age) {
  if (age > 12 && age < 20)
  return 'You are a teenager!'
  else
  return "You are not a teenager"
}

function ageChecker(age) {
  if (age > 12 && age < 20)
  return 'You are a teenager!'
  else if (age < 13)
  return "You are a kid"
  else if (age > 19)
  return "You are a grownup"
}

function ternaryTeenager(age) {
  return (age > 12 && age < 20) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  case "hungry":
    console.log("You should eat a big chocolate cake");
    break;
  default:
    console.log("That's not a mood we support");
}
