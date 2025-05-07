Bug Reproduction Steps:
1. docker compose up -d
2. pnpm run dev
3. go to localhost:5173 in browser and open devtools
4. observe http 400 error since there are no tables
5. psql "postgresql://postgres:password@localhost:54321/electric"
6. create table:
```sql
create table items ( id int primary key generated always as identity );
```
8. refresh web page and observe request success
9. drop and create table:
```sql
drop table items; create table items ( id int primary key generated always as identity );
```
10. refresh web page and wait ~1 minute
11. observe torrent of requests and 429 responses
