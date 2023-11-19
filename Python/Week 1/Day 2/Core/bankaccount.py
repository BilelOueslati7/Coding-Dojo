class BankAccount:
    def __init__(self, interest_rate=0.01, balance=0):
        self.balance = balance
        self.interest_rate = interest_rate

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            interest_earned = self.balance * self.interest_rate
            self.balance += interest_earned
            print(f"Interest earned: ${interest_earned}. New balance: ${self.balance}")
        else:
            print("No interest earned. Balance is not positive.")
        return self



