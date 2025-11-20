+++
title = "cses.fi - Increasing Array"
author = ["yelobat"]
date = 2025-11-19
tags = ["algorithms", "rust"]
draft = false
+++

<div class="ox-hugo-toc toc">

<div class="heading">Table of Contents</div>

- [Introduction](#introduction)
- [The problem](#the-problem)

</div>
<!--endtoc-->

{{< katex >}}


## Introduction {#introduction}

Welcome again to the series on the cses.fi problem set. Let's get right into our next
problem: "Increasing Array".


## The problem {#the-problem}

"You are given an array of \\(n\\) integers. You want to modify the array so that it is
increasing, i.e., every element is at least as large as the previous element.

On each move, you may increase the value of any element by one. What is the minimum
number of moves required?"

The most important part of this description is the following: "every element is \\(\bold{at least}\\)
as large as the previous element". So if we have the following array:

\begin{align}
[3, 1]
\end{align}

The minimum number of moves would be \\(2\\) because we only have to increase it to \\(\bold{at least}\\)
as large as the previous element, which is \\(3\\), and \\(3 - 1 = 2\\).

Let's implement this:

```rust
use std::io;

fn main() {
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read a line");
    let _n: u64 = input
        .trim()
        .parse()
        .expect("The input was not a valid number");

    input.clear();

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read a line");

    let v: Vec<u64> = input
        .split(" ")
        .filter(|&s| s != " ")
        .map(|s| s.trim().parse().unwrap())
        .collect();

    let mut prev: u64 = v[0];
    let mut ans: u64 = 0;
    for v in v.iter() {
        if v < &prev {
            ans += prev - *v;
        } else {
            prev = *v;
        }
    }
    println!("{}", ans);
}
```

And that's the solution! You will notice that at first the first problems on
cses.fi are pretty intuitive, but of course, the difficulty will increase and
the explanations will become more and more intricate as we go on.

Stay tuned for these harder and more interesting problems, and for our next problem:
Permutations.
