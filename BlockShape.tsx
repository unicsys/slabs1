Hi [Leader's name] and [Second person's name],
Great discussion. I work with ontologies and knowledge graphs, so I can share some relevant experience.

On Data Wrangling:
[First person's name], your list perfectly captures what "data wrangling" really means in practice - it's all those unglamorous but critical steps before analysis can even begin. I use Python for similar tasks, though like [Second person] mentioned, many of these still require manual judgment calls (e.g., which correlated variable to keep, what constitutes "too few" values).
On Ontologies and Governance:
[Second person's name], your question about "who determines the right data sources and transformations" is spot on. We're working with the RTX Data Governance team on this exact challenge.
Our current approach:

Building a centralized Ontology Hub for data definitions
Using knowledge graphs (Mobi, Anzo, Fuseki) to map relationships between data elements
Developing semantic ETL - instead of copying data through Bronze→Silver→Gold tables, we create a unified graph layer that queries source tables directly
Working on entity resolution (identifying when different columns refer to the same thing)
Integrating with enterprise tools (Axon, Informatica EDC)

Reality:

This is work in progress - we're tackling databases with 300+ tables, but it's not a complete solution yet
Many wrangling tasks (like filtering engineering parts or ATP special cases) will always need domain expertise
The governance question of "who decides" is as much organizational as technical

Practical suggestion:
Could we pick one specific wrangling problem (maybe duplicate column detection across your 100+ column datasets) and explore whether semantic profiling could help automate it? This could be a small pilot before tackling bigger governance questions.
The Databricks migration might be good timing to test some of these approaches.
Best,
