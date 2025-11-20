+++
title = "cses.fi - Permutations"
author = ["yelobat"]
date = 2025-11-20
tags = ["algorithms", "rust"]
draft = false
+++

<div class="ox-hugo-toc toc">

<div class="heading">Table of Contents</div>

- [Introduction](#introduction)
- [The Problem](#the-problem)

</div>
<!--endtoc-->

{{< katex >}}


## Introduction {#introduction}

Welcome to the series once again, today we are going to look at our next problem:
"Permutations".


## The Problem {#the-problem}

"A permutation of integers \\(1, 2, ..., n\\) is called beautiful if there are no
adjacent elements whose difference is \\(1\\).

Given \\(n\\), construct a beautiful permutation if such a permutation exists."

Okay, so for these types of problems, it's important to break it down by verifying
test cases manually to see if you can identify some kind of exploitable pattern
which can be easily programmed. Let's go from $1, 2, ...$ and so on to see if there
is a pattern:

If \\(n = 1\\) (one solution):

\begin{align}
[1]
\end{align}

If \\(n = 2\\) (NO SOLUTIONS):

\begin{align}
[1, 2] \\\\
[2, 1]
\end{align}

If \\(n = 3\\) (NO SOLUTIONS):

\begin{align}
[1, 2, 3] \\\\
[1, 3, 2] \\\\
[2, 1, 3] \\\\
[2, 3, 1] \\\\
[3, 2, 1] \\\\
[3, 1, 2] \\\\
\end{align}

So far, there are only solutions for when \\(n = 1\\). Let's take a look at the \\(n = 4\\) and
see if the trend starts to appear:

\begin{align}
[2, 4, 1, 3] \leftarrow \text{A SOLUTION}
\end{align}

If you think about it, for all even \\(n\\), we have a solution that follows the following format:

\begin{align}
[2, 4, 6, 8, ..., n, 1, 3, 5, 7, ..., n - 1]
\end{align}

The only problem is if \\(n - 1 = 1\\), but solving this proves that this only has a
solution if \\(n = 2\\), which we showed earlier.

So, does a pattern exist for odd \\(n\\)? Yes, the pattern applies:

\begin{align}
[2, 4, 6, 8, ..., n - 1, 1, 3, 5, 7, ..., n]
\end{align}

We need to assure that \\((n - 1) - 1 = 1\\) is not satisfied, and this only happens when \\(n = 3\\),
which we also showed has no solutions already.

Now that we know the patterns and proved that they work, we have that there exists only solutions
for all \\(n \notin \\{2, 3\\}\\).

Let's implement this:

```rust
use std::io;

fn main() {
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read a line");
    let n: u64 = input
        .trim()
        .parse()
        .expect("The input was not a valid number");

    if [2, 3].contains(&n) {
        println!("NO SOLUTION");
    } else {
        (2..=n).step_by(2).for_each(|v| print!("{v} "));
        (1..=n).step_by(2).for_each(|v| print!("{v} "));
        println!();
    }
}
```

And that's all. It basically prints all of the even numbers in the range \\([2, n]\\), and then
all of the odd numbers in the range \\([1, n]\\). Which is the pattern we found previously to
satisfy the problem requirements.
