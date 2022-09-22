import React from "react";
import "./scrum.css";

// imports related to DND
import { Droppable, Draggable } from "react-beautiful-dnd";

export function ListComponents({ Marvel, DC }) {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "white" : "white",
    width: "15rem",

    height: "20rem",
    color: "black",
    marginLeft: "14rem",
    boxShadow: "1px 2px 2px gray",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    background: isDragging ? "white" : "white",
    color: isDragging ? "white" : "black",
    padding: isDragging ? "0%" : "2%",
    paddingLeft: "2%",
    color: "black",
    margin: "0%",
    fontSize: "17px",
    borderBottom: "0.5px solid gray",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <nav>
        <h1>CHATSCRUM</h1>
        <div className="var">
          <p>User Type:Owner</p>
          <p>Project Name: Chatscrum</p>
        </div>
      </nav>
      <div
        className="quotes"
        style={{
          margin: "-5rem -10rem",
          color: "black",
          position: "absolute",
        }}
      >
        Hello Liam Nussle Welcome to your Scrumboard
      </div>
      <Droppable droppableId="Marvel_drop_area">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul
              style={{
                listStyleType: "none",
                textAlign: "left",
                padding: "0%",
                width: "100%",
              }}
            >
              <h6
                style={{
                  height: "2rem",
                  backgroundColor: "grey",
                  textAlign: "center",
                  marginTop: "-1.5rem",
                  alignItems: "center",
                }}
              >
                Weekly Tasks
              </h6>
              {Marvel.map((data, index) => (
                <Draggable
                  key={data}
                  draggableId={`${data}${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {/* {provided.placeholder} */}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="DC_drop_area">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <ul
              style={{
                listStyleType: "none",
                textAlign: "left",
                padding: "0%",
                width: "100%",
              }}
            >
              <h6
                style={{
                  height: "2rem",
                  backgroundColor: "grey",
                  textAlign: "center",
                  marginTop: "-1.5rem",
                  alignItems: "center",
                }}
              >
                Daily Target
              </h6>
              {DC.map((data, index) => (
                <Draggable
                  key={data}
                  draggableId={`${data}${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {/* {provided.placeholder} */}
          </div>
        )}
      </Droppable>
    </div>
  );
}
