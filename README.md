[![JSR @pamoller/entropy](https://jsr.io/badges/@pamoller/entropy)](https://jsr.io/@pamoller/entropy)
[![GitHub Actions CI](https://github.com/pamoller/entorpy/workflows/ci/badge.svg)](https://github.com/pamoller/entropy/actions/workflows/ci.yml)
# entropy

Gurantees the entropy of a token

````typescript
import {ensure, calculate} from "@pamoller/entropy";

ensure("aaaaaaaa", 8, 3.5); // throws Error too low
console.log(calculate("aaaaaaaa") // 0
````