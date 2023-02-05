package com.stackroute.springboot.model;

import javax.persistence.*;



    @Entity
    @Table(name = "creditcard")
    public class Creditcard {

        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column
        private int id;
        @Column
        private String name;
        @Id
        @Column

        private Long creditcardnumber;
        @Column
        private String food;
        @Column
        private String movie;

        @Column
        private String bills;
        @Column
        private String shopping;
        @Column

        private String totallimit;

        public String getTotallimit() {
            return totallimit;
        }

        public void setTotallimit(String totallimit) {
            this.totallimit = totallimit;
        }

        public String getRemlimit() {
            return remlimit;
        }

        public void setRemlimit(String remlimit) {
            this.remlimit = remlimit;
        }

        @Column

        private String remlimit;

        public Creditcard(int id, String name, Long creditcardnumber, String food, String movie, String bills, String shopping, String totallimit, String remlimit) {
            this.id = id;
            this.name = name;
            this.creditcardnumber = creditcardnumber;
            this.food = food;
            this.movie = movie;
            this.bills = bills;
            this.shopping = shopping;
            this.totallimit = totallimit;
            this.remlimit = remlimit;
        }

        public Creditcard() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }



        public String getFood() {
            return food;
        }

        public void setFood(String food) {
            this.food = food;
        }

        public String getMovie() {
            return movie;
        }

        public void setMovie(String movie) {
            this.movie = movie;
        }

        public String getBills() {
            return bills;
        }

        public void setBills(String bills) {
            this.bills = bills;
        }

        public String getShopping() {
            return shopping;
        }

        public Long getCreditcardnumber() {
            return creditcardnumber;
        }

        public void setCreditcardnumber(Long creditcardnumber) {
            this.creditcardnumber = creditcardnumber;
        }

        public void setShopping(String shopping) {
            this.shopping = shopping;
        }
    }
