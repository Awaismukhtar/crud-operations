import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateEventDto } from 'src/dtos/events.dtos/event.create.dto';
import { UpdateEventDto } from 'src/dtos/events.dtos/update.event.dto';
import { Event } from 'src/models/event';

@Controller('/events')
export class EventsController {
  private events: Event[] = [];
  @Get(':id')
  findOne(@Param() id) {
    const event = this.events.find((event) => event.id === id);
    return event;
  }
  @Get()
  findAll() {
    return this.events;
  }
  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    return input;
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {}
}
