---
title: "Credit Risk Valuation"
description: "A credit risk engine that values the standing loans with a bank based on IFRS 9 ECL Framework."
tech: ["Python", "NumPy", "Plotly", "Scikit-learn"]
github: "https://github.com/amrit1610-fin/Credit-Risk-Engine"
live: "https://credit-risk-engine-jmi9.onrender.com/"
date: "2026-08-17"
---

### Methodology

This engine evaluates the credit-risk of a portfolio of loans standing out with a bank basd on IFRS 9 ECL Framework. It uses machine learning model (XGBoost) to calculate Probability of Default (PD) and Loss Given Default (LGD) to accurately identify the underlying pattern. 

### Key Features:
* IFRS 9 ECL framework is strictly followed to calculate baseline Expected Credit Loss.
* Rigorous cleaning and arrangement of data for building different risk models accuractely.
* XGBoost models to model PD and LGD, respectively.
* Gaussian Copula:  standard normal shocks are generated and multiplied by the Cholesky factor of the correlation matrix to store extreme scenarios for VaR beyond 99%.