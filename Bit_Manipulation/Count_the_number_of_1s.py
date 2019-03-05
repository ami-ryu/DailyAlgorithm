# Count the number of ones in the binary representation of the given number
# 2진수로 표현된 수에서 1의 개수 세기

def count_one(n: int):
    count = 0

    while (n):
        n = n & (n - 1)
        count += 1

    return count

print(count_one(4))
