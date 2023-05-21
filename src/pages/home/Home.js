import React from "react";
import Widget from "../../components/widget/Widget";

export default function Home() {
  return (
    <div className="widgets block md:flex me-10 pt-4">
      <Widget type='users' />
      <Widget type='projects' />
      <Widget type='contractors' />
    </div>
  )
}